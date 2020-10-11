import React from 'react';
import {connect} from 'react-redux';
import {addItem, deleteItem, submitList} from './redux/actions';
import './App.css'


class App extends React.Component{


    constructor(props){
        super(props);
        this.handleAdd=this.handleAdd.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleRemove=this.handleRemove.bind(this);
    }


    handleAdd(item){
        if(!this.props.wishList.includes(item)){
            this.props.addItem(item);
        }else{
            alert("already on the list")

        }
    }

    handleDelete(item){
        this.props.deleteItem(item);
    }

    handleSubmit(){
        if(this.props.wishList.length!=0){
            this.props.submitList();
            alert("Wish list submitted to Santa!")
        }else{
            alert("cannot submit an empty list")
        }
        

    }

    handleRemove(item){
        this.props.deleteItem(item);
    }

    render(){

        let items=this.props.wishList.map((item)=>
                <ul onClick={this.handleRemove.bind(this, item)}>{item}</ul>
            );

        return(
            <div className="outer-box">
                <h1>MY WISHLIST</h1>
                <div id="item_box">{items}</div>
                <FormField handleAddProp={this.handleAdd}/>
                <button id="submit_btn" onClick={this.handleSubmit}> Submit </button>
            </div>
        );

    }

}


class FormField extends React.Component{
    constructor(props){
		super(props);

		this.handleAddProp=this.handleAddProp.bind(this);
		this.handleChange=this.handleChange.bind(this);

		this.state={
			item:""

		};
	}

	handleAddProp(e){
        e.preventDefault();
        if(this.state.item !==""){
            this.props.handleAddProp(this.state.item);

            e.target.reset();
        }else{
            alert("cannot submit empty input")
        }

        const newState = {
            item:""
          };

          this.setState(newState, () => {
          });

	}

	handleChange(e){
		this.setState({
			[e.target.name] : e.target.value
		});
    }
    
    render(){

		return(
            <div>
		        <form onSubmit={this.handleAddProp}>
					<input id="input_field" type="text" name="item" onChange={this.handleChange}></input>
					<button id="add_btn">Add</button>
				</form>
            </div>
			);
	}
}






function mapStateToProps(reduxState){

	return {
		wishList: reduxState.wishList
	};
}


export default connect(mapStateToProps, {addItem, deleteItem, submitList})(App);


