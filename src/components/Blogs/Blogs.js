import React from 'react';

import './Blogs.css'
const Blogs = () => {
    return (
        <div>
           <div>
               <h1 className='title'>1.What is Context API?</h1>
               <h2 className='title'>Context API is a way to pass data through the component tree without having to pass props down manually at every level.It allows us to share information to any component, by storing it in a central place and allowing access to any component that requests it. We also say that it is a global variable that react app produce and it can easily pass around in child components.It solves the props drilling problem from all level of our application.In fact, any situation where we have to pass a prop through a component so it reaches another component somewhere down the tree is where we can use the Context API.</h2>
           </div>
           <div>
               <h1 className='title'>2.What is Semantic Tag?</h1>
               <h2 className='title'>Semantic tags provide information about the contents of those tags that goes beyond just how they look on a page.This tag makes the HTML more comprehensible by better defining the different sections and layout of web pages. These tags are easier for both people and machines to read and understand it.  It makes web pages more informative and adaptable, allowing browsers and search engines to better interpret content.Examples of semantic HTML tags includes nav,footer,section tags etc.  </h2>
           </div>
        </div>
    );
};

export default Blogs;