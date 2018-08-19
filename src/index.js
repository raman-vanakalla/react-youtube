import React , {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search-bar.js';
import VidDetail from './components/video-detail.js';
import VidList from  './components/video-list.js';
import YTSearch from  'youtube-api-search';
const API_KEY='AIzaSyB6rpXJsTeutmDEGI66DjH_qrAQbRsmZ2g';

class App extends Component
{
	constructor(props)
	{
		console.log('app','constructor is invoked');
		super(props);
		this.addVideos('react.js');
		this.state={
		     videos:[],
             selectedVideo:null
		}
	}
	render()
	{
		console.log('app component is rendering ');
		return(
          <div>
             <SearchBar videosPlease={(term)=>{this.addVideos(term)}} />
             <VidDetail video={this.state.selectedVideo}  />
             <VidList videos={this.state.videos} addSelect={(video)=>{this.setState({selectedVideo:video});}} />

          </div>
		);
	}
	addVideos(term)
	{
		console.log('index.js','addVideos is invoked');
         YTSearch({key:API_KEY,term:term},videos=>{
               this.setState({videos});
             if(!this.state.selectedVideo)
              {
              	this.setState({selectedVideo:videos[0]});
              }
               
      
         	});
     }
    
} 






ReactDom.render(<App />,document.querySelector('.cont'));