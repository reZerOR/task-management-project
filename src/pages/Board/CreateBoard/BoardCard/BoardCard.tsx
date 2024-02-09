/* eslint-disable @typescript-eslint/no-explicit-any */


import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";



const BoardCard = (card:any) => {
    const{name,details,type,_id}=card.card
    // console.log
    return (
        <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://cdn.pixabay.com/photo/2016/03/31/19/50/checklist-1295319_640.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{name}</p>
          <p className="text-small text-default-500">{type}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{details}</p>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link  href={`/singleboard/${_id}`} > <button className="btn-secondary underline">View Details.</button></Link>
      </CardFooter>
    </Card>
    );
};

export default BoardCard;