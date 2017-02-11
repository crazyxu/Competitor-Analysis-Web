import React, {Component} from 'react'

class FilterComponent extends Component{
  constructor(props){
    super(props);
    this.state = {filters: [], type: "platform", content: ""};
    this.addFilter = this.addFilter.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    event.preventDefault();
    this.props.search(this.state.filters)
  }

  addFilter(event){
    let newFilter = {
      'type': this.state.type,
      'content': this.state.content
    }
    this.setState({
      'filters': [...this.state.filters, newFilter],
      'content': ''
    });
    event.preventDefault();
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.value;
    switch (target.type) {
      case 'text':
        this.setState({
          'content': value
        });
        break;
      default:
        this.setState({
          'type': value
        });
        break;
    }
  }

  filterForm(){
    return (
      <div>
        <form onSubmit={this.addFilter}>
          <select value={this.state.type} onChange={this.handleInputChange}>
            <option value="platform">平台</option>
            <option value="title">标题</option>
          </select>
          <input type="text" name="content" value={this.state.content} onChange={this.handleInputChange}/>
          <input type="submit" value="add" />
        </form>
        <button onClick={this.onSubmit}>search</button>
      </div>
    );
  }

  render(){
    let filterList = this.state.filters.map((filter, index) =>
      <li key={index}>{filter.type} {filter.content}</li>
    )
    return(
      <div>
        {this.filterForm()}<br/>
        {filterList}
      </div>
    );
  };
}

export default FilterComponent;
