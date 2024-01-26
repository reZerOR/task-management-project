const SingleTask = ({task}) => {
    console.log(task);
    const {name, description, visibility} = task
    
    return (
        <div className="bg-slate-100 p-5">
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{visibility}</p>
        </div>
    );
};

export default SingleTask