import { useState, useEffect } from "react";
export default function AnnouncementBoard() {
    const [loading,setloading]=useState(false);
    const [announcements, setAnnouncements] = useState<{ id:number;name:string;price:number }[]>([]);
    const [query,setQuery]=useState("")
    
    async function loadAnnouncements() {
        const response = await fetch( `http://10.100.104.116:3210/api/products?search=${encodeURIComponent(query)}`);
        if (!response.ok){
        throw new Error(`Announcements request failed with status ${response.status}`);
    }
 //
    const data = await response.json();
    console.log(data);
//
    setAnnouncements(data);
    return data;
  
    
}


return (
    <div>
        <input value={query} onChange={(e)=>setQuery(e.target.value)} />
        <button onClick = {loadAnnouncements}>search</button>
        {loading && <p>searching...</p>}
        {announcements.map((announcement)=> (
        <p key={announcement.id}>{announcement.name}</p>
        ))}
        
    </div>
)}