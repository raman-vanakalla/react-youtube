import React from 'react';





const VidList =(props)=>
{
	    console.log('VidList component is rendireing');
	    if(props.videos.length==0)
	    {
	    	return (<div className="col-lg-4">
	    	  NO VIDEOS
	    	</div>);
	    }
	  
    	const arrayVideos=props.videos.map((video)=>
    	{
           
           return (<div key={video.id.videoId} className="col-lg-12 listElements" onClick={(e)=>
           	{props.addSelect(video)}}>
                    <div className="col-lg-4">
                      <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
                    </div>
                    <div className="col-lg-8">
                      {video.snippet.title}
                    </div>
               
               </div>);
    	});

    	return(
            <div className="col-lg-4">
                 {arrayVideos}


            </div>
    		);
}

export default VidList;

