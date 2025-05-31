import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import DetailsData from '../../Components/DetailsPageSections/DetailsData';

const ProjectDetails = () => {
    const [detailsData, setDetailsData] = useState({});
    // getting the id
    const idFromParams = useParams()

    const id = idFromParams.id

    // getting data
    const data = useLoaderData();

    useEffect(() => {
        const detailData = data.find(details => details.id === parseInt(id))
        setDetailsData(detailData)
    }, [data, id])

    console.log(detailsData);

    return (
        <div className='mx-3 lg:mx-24 2xl:mx-36'>
            <DetailsData data={detailsData} />
        </div>
    );
};

export default ProjectDetails;