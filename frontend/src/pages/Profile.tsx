import React, {useEffect, useState} from 'react'

type ProfileData = {
  username: string
  displayName: string
  bio: string
  skills: string[]
}

export default function Profile(){
  const [profile, setProfile] = useState<ProfileData | null>(null)

  useEffect(()=>{
    fetch('/api/profile')
      .then(r=>r.json())
      .then(setProfile)
  }, [])

  if(!profile) return <div>Loading...</div>

  return (
    <div className="page">
      <h1>{profile.displayName}</h1>
      <p>{profile.bio}</p>
      <h3>Skills</h3>
      <ul>
        {profile.skills.map(s=> <li key={s}>{s}</li>)}
      </ul>
    </div>
  )
}

