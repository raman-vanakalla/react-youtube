import React from 'React';


const VidDetail=(props)=>
{
	console.log('VidDetail is rendering');
	if(!props.video)
		return null;
	
	const url='http://youtube.com/embed/'+props.video.id.videoId;
    return(
       <div className="col-lg-8">
          <div className="col-lg-12 embed-responsive embed-responsive-16by9">
               <iframe allowfullscreen className="embed-responsive-item" src={url} ></iframe>
          </div>

          <div className="col-lg-12">
      
                  <h3>
                    {props.video.snippet.title}
                  </h3>
                  <p>
                    {props.video.snippet.description}
                  </p>
              
          </div>
       </div>

    	);
}


export default VidDetail;