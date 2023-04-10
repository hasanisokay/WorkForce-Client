export const jobsData = async () => {
    const data = await fetch('jobsData.json');
    const jobsData = await data.json()

    return jobsData
    
}