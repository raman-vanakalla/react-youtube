import React from 'react';
import {Component} from 'react';

class SearchBar extends Component
{
	constructor(props)
	{
	   console.log('SearchBar','constructor');
       super(props);
       this.state=
       {
       	 term:'',
       };
	}
	render()
	{
		console.log('SearchBar is rendering');
        return(
             <div className="col-lg-12">
               <div className="col-lg-2">
                     <h3>Aarvie Tube</h3>
               </div>
               <div className="col-lg-8 SearchBar">
                 <input type="text" className="form-control" value={this.state.term} onChange={event=>{this.inputChanged(event);}} />
               </div>
               <div className="col-lg-2" />
             </div>

        	);
	}
	inputChanged(event)
	{
		this.setState({term:event.target.value});
		this.props.videosPlease(event.target.value)
	}

}

export default SearchBar;