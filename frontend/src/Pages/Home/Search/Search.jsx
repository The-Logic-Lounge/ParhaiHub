import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Header from '../Header/Header'

function search() {
    const { subject } = useParams();
    const [data, setData] = useState(subject);
    const [course, setCourse] = useState([]);
    const [openTM, setOpenTM] = useState(false);
    const [Tdec, setTeacherDetails] = useState(null);
    const [tname, setTname] = useState({});
    const [starCount, setStarCount] = useState(5);

    const price = {
        math: 700,
        physics: 800,
        computer: 1000,
        chemistry: 600,
        biology: 500,
    };

    const daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    let SearchTeacher = async()=>{
        let Subject = data.toLowerCase();
        let Data = await fetch(`/api/course/${Subject}`)
        let response = await Data.json();
        if(response.statusCode == 200){
        setCourse(response.data)
        // console.log(response.data.length)
        }
        setData('')
    }

    useEffect(()=>{
        SearchTeacher();
    },[])

    const openTeacherDec = async(id,fname,lname,sub)=>{
        setTname({fname,lname,sub});

        const data = await fetch('/api/teacher/teacherdocuments',{
            method: 'POST',
            credentials: "include",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({teacherID : id}),
        })

        const res = await data.json();
        // console.log(res.data);
        setTeacherDetails(res.data);
        setOpenTM(true);
    }


  return (
    <>
        <Header/>
        <div className='flex flex-col items-center justify-center'>
            <div className="search mb-10">
                <img src="https://www.figma.com/file/6b4R8evBkii6mI53IA4vSS/image/6c476f454537d7f27cae2b4d0f31e2b59b3020f5" width={30} alt="" />
                <input type="text" placeholder='Ex: Math ...' value={data} onChange={(e)=>setData(e.target.value)}/>
                <button className='w-32' onClick={SearchTeacher}>Find Teacher</button>
            </div>
            <div className='overflow-auto '>
                { course && (
                    course.map((Data)=>(
                    <div key={Data._id} className='relative bg-[#F9D976] p-4 gap-6 h-20 mb-3 flex items-start rounded-sm w-[75rem] border border-[#C86D42]/20 shadow-sm'>
                        <div className='text-[#2B2D2F] font-bold'>
                        {Data.coursename.toUpperCase()} 
                        </div>
                        <div onClick={()=>openTeacherDec(Data.enrolledteacher.Teacherdetails, Data.enrolledteacher.Firstname, Data.enrolledteacher.Lastname, Data.coursename)} className='text-[#3B82F6] cursor-pointer font-bold'>{Data.enrolledteacher.Firstname}  {Data.enrolledteacher.Lastname}</div>
                        <div className='text-[#2B2D2F]'><span className=' text-[#2B2D2F]'>Desc :</span> {Data.description}</div>

                        <div className='text-[#2B2D2F]'>{Data.enrolledStudent.length}/20</div>
                    
                        <div className='absolute right-4'>
                            <div onClick={()=> alert('Pls login to enroll it')} className='text-white bg-[#C86D42] py-2 px-3 cursor-not-allowed hover:bg-[#A65A33]'>Enroll Now</div>
                        </div>
                        <div className="absolute bottom-2">
                            <span className='mt-2 font-bold'>Timing : </span>
                            {'[ '}
                            {Data.schedule.map(daytime => {
                            return `${daysName[daytime.day]} ${Math.floor(daytime.starttime / 60)}:${daytime.starttime % 60 === 0 ? "00" : daytime.starttime % 60} - ${Math.floor(daytime.endtime/60)}:${daytime.endtime % 60 === 0 ? "00" : daytime.endtime % 60}`;
                            }).join(', ')}
                            {' ]'}
                        </div>
                    </div>
                    ))
                )}
            </div>
            {openTM && (
                <div key='1' className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center'>
                <div className='bg-[#FFFCF7] w-96 h-[21rem] rounded-md border border-[#F9D976] shadow-lg'>
                        <div className=' absolute w-9 h-9 bg-white rounded-xl cursor-pointer flex items-center justify-center m-2' onClick={()=>setOpenTM(false)}>✖️</div>
                        <div className='flex flex-col justify-center p-5 text-1xl gap-4'>
                    <p className='text-center text-2xl bg-[#3B82F6] rounded-sm py-1 text-white mb-5'>{tname.sub.toUpperCase()}</p>
                    <p className='text-[#2B2D2F]'>Teacher Name : <span className='text-[#2B2D2F]'>{tname.fname} {tname.lname}</span></p>
                        {/* <p>Teacher Name : <span className='text-white'>{tname.fname} {tname.lname} {'⭐'.repeat(starCount)}</span></p> */}
                    <p className='text-[#2B2D2F]'>Education : <span className='text-[#2B2D2F]'>Postgraduate from <b className='text-[#3B82F6]'>{Tdec.PGcollege}</b> with {Tdec.PGmarks} CGPA</span></p>
                    <p className='text-[#2B2D2F]'>Experience : <span className='text-[#2B2D2F]'>{Tdec.Experience} years</span></p>
                    <p className='text-[#2B2D2F]'>Course Name : <span className='text-[#2B2D2F]'>{tname.sub.toUpperCase()}</span></p>
                        {/* <p>Course Duration : <span className='text-white'>6 Months</span></p> */}
                        {/* <p>Fees : <span className='text-white'>Rs. {price[tname.sub]}</span></p> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    </>
  )
}

export default search