import React, { Component } from 'react'
import './fixtures'
import CommentsList from './CommentsList'
import commentaren from './commentaren'

class Article extends Component{
    constructor(props) {
        super(props)
        this.state = {isOpen: false}
    }

    handleClick = () => {
        console.log('---', 'clicked')
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const {article} = this.props
        const style = {width: '80%'}
        const body = <section className="card-body">{article.body}</section>
        return(
           <div className="card mx-auto" style={style}> 
               <div className="card-header">
               <h2>
                  {article.title}
               </h2>
               </div>
                <div className="card-body">
                    {body}
                    <button onClick={this.handleClick}> 
                    {this.state.isOpen ? 'Hide comments' : 'Show comments'} </button>
                    {this.state.isOpen ? <section>
                        <CommentsList articleID={article.id} comments={commentaren}/>
                        </section> : null}
                </div>
            </div>
        
        )
    }
}


export default Article;

