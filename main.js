const jobListings =[
    const jobListing=JSON
function getTagHTML(tag, tagClass='tag') {
    return '<span class="tagClass"> ${tag} </span>';
}





function getJobListingHTML(jobData) {
    const JOB_TAGS_PLACEHOLDER='###JOB_TAGS###';
        let getJobListingHTML= '<div class="jobS_item"><div class="jobs_column jobs_column-left">
        
                <img src="${jobData.logo}" alt="${jobData.company}" class="job-image">
                <div class="jobs-info">
                    <span class="jobs_company">${jobData.company}</span>
                    <span class="jobs_title">${jobData.position}</span>
                    <ul class= "jobs_details">
                        <li class="jobs_details_item">${jobData.contract}</li>
                        <li class="jobs_details_item">${jobData.postedAt}</li>
                        <li class="jobs_details_item">${location}</li>
                    </ul>
                </div>
            </div>
                <div class="jobs_column jobs_column_right">
                     $ {JOB_TAGS_PLACEHOLDER}
                    </div>
                </div>
   ;
   

  const tagsArray=[
      jobData.role,
      jobData.level,
      ...(jobData.languages ||[]),
      ...(jobData.tools ||[]),
  ];
  const PassesFilter = !filterTags.length || !filterTags.every(tag =>{
      tagsArray.includes(tag)
  });

  if(PassesFilter){
      return '';
  }

  const tagsString= tagsArray.reduce((acc,current)=>{
    return acc + getTagHTML(currentTag);
  },'');

  return JobListingHTML.replace(JOB_TAGS_PLACEHOLDER, tagsString);

  };

  const jobListingsHTML=jobListings.reduce((acc, currentListing)=>{
    return acc + getJobListingHTML(currentListing);
  },'');

  document.getElementById('jobs').innerHTML= jobListingsHTML;
  window.addEventListener('click', (event)=>{
    const targetEl = event.target;
  },);