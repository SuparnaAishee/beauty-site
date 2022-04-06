import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-3xl text-semibold'> What is semantic tag</h1>
            <h5 className='text-xl'>HTML was originally created as a markup language to describe documents on the early internet. As the internet grew and was adopted by more people, its needs changed.

                Where the internet was originally intended for sharing scientific documents, now people wanted to share other things as well. Very quickly, people started wanting to make the web look nicer.

                Because the web was not initially built to be designed, programmers used different hacks to get things laid out in different ways. Rather than using the <table></table> to describe information using a table, programmers would use them to position other elements on a page.

                As the use of visually designed layouts progressed, programmers started to use a generic “non-semantic” tag like <div></div>. They would often give these elements a class or id attribute to describe their purpose. For example, instead of <header></header> this was often written as <div class="header"></div>.

                As HTML5 is still relatively new, this use of non-semantic elements is still very common on websites today.</h5>

            <h1 className='text-3xl text-semibold mt-6'> What's the difference between inline and inline-block?</h1>
            <h5 className='mb-3 text-xl' > inline The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height.

                inline-block It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values.

                block The element will start on a new line and occupy the full width available. And you can set width and height values.
            </h5>
        </div>
    );
};

export default Blogs;