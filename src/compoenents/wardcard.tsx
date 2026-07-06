import { useState } from "react";

interface WardCardProps {
ward_name:string;
ward_no:number;
landmark:string;
motto:string;

}
export function WardCard({ward_name,ward_no,landmark,motto}:WardCardProps)
{
return (
    <>
    <div className="ward-card">
    <h1> {ward_name}</h1>
    <p>ward number:{ward_no}</p>
    <p><strong>landmark;</strong>{landmark}</p>
    </div>
    </>
)



}