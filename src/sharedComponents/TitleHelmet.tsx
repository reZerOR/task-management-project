import { Helmet } from "react-helmet-async";


const TitleHelmet = ({ title }: { title: string }) => {
    return (
        <Helmet>
            <title>TaskMan | {title}</title>
        </Helmet>
    );
};

export default TitleHelmet;