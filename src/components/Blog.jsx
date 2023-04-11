import React from 'react';

const Blog = () => {
    return (
        <div className='lg:mx-12 mx-4 text-xl font-semibold my-6'>
            <h1>Q1. When should you use context API?</h1>
            <h1>Ans: I will use context API when I need to access some data many nested components. </h1>
            <br />
            <h1>Q2. What is a custom hook?</h1>
            <h1>Ans: A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. It can access various data from the component it is using.</h1>
            <br />
            <h1>Q3. What is useRef?</h1>
            <h1>Ans: It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements.</h1>
            <br />
            <h1>Q4. What is useMemo?</h1>
            <h1>useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</h1>
        </div>
    );
};

export default Blog;