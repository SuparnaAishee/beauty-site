import { Link } from 'react-router-dom'
import watch from '../../img/realme_watch_2_pro_review_main_1632745173458.webp';
import Reviews from '../reviews/Reviews'
export default function App() {
    return (
        <>
            <div className="lg:grid grid-cols-5 gap-11">
                <div className="col-span-3 bg-gray-200 p-4 rounded-lg">
                    <h1 className="text-4xl font-bold my-3">Get your watch</h1>

                    <h1 className="text-5xl font-bold text-indigo-700">See on your watch</h1>
                    <p className="my-5 text-justify">REVIEWS
                        Honest and in-depth reviews of the horological creations we all admire; A trusted and interesting resource for collectors & aficionados alike.

                        We write detailed reviews of both affordable & luxury wristwatches from watch brands big and small, with original photography & videos. Best of all, we’re completely independent: neither aBlogtoWatch, nor our writers take any additional money for the reviews we publish,

                        so you get honest opinions on everything we share. And you’ll have an opinion too! Make sure to leave it in the Discussion area of each post for bonus points… Okay, so there are no points—but everyone wins! </p>
                    <button className="rounded bg-indigo-200 py-2 px-5 my-3 font-semibold  text-indigo-700 hover:text-black">Live Demo</button>
                </div>
                <div className="col-span-2">
                    <img className='rounded-lg' src={watch} alt="" />
                </div>

                <div className='grid justify-center w-screen'>
                    <Link to='/reviews' className='rounded bg-indigo-200 py-4 px-5 my-3 font-semibold text-center text-indigo-700 hover:text-black' >Reviews</Link>
                    <Reviews />

                    <Link to='/reviews' className='rounded bg-indigo-700 py-4 px-5 my-3 font-semibold text-center text-yellow-50 hover:text-yellow-500' >See All Reviews</Link>
                </div>
            </div>
        </>
    )
}