import React from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Avatar } from './ui/avatar'
import { AvatarImage } from './ui/avatar'

const LatestJobCard = ({job}) => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-slate-100 border border-gray-100 cursor-pointer'>
           <div className='flex items-center gap-2 my-2'>
                <Button size='icon' variant="outline" className="p-6">
                    <Avatar>
                        <AvatarImage src={job?.company?.logo} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'>India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant={'ghost'}>{job?.position} Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant={'ghost'}>{job?.jobType}</Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant={'ghost'}>{job?.salary}LPA</Badge>
            </div>
        </div>
    )
}

export default LatestJobCard