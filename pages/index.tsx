import { motion } from 'framer-motion';
import Head from 'next/head';
import { fadeInUp, routeFade, stagger } from "../animations";
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';

const index = () => {
    return (
        <>
            <Head>
                <title>About Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <motion.div
                className="flex flex-col flex-grow px-6 pt-1"
                variants={routeFade}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <h5 className="my-3 font-medium">
                    I am currently working as a Front End Developer in Ho Chi Minh City, Viet Nam. I have 3+ years of experience in Web Development and I have some projects web personal currently active.
                </h5>
                <div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-black-100"
                    style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
                    <h6 className="my-3 text-xl font-bold tracking-wider">What I Offer</h6>
                    <motion.div
                        className="grid gap-6 lg:grid-cols-2"
                        variants={stagger}
                        animate="animate"
                        initial="initial"
                    >
                        {/* children's initial and animate property should be same as the parent during a stagger effect */}
                        {
                            services &&
                            services.map(service =>
                                <motion.div
                                    className="rounded-lg bg-gray-toggle-black-200 lg:col-span-1"
                                    key={service.title}
                                    variants={fadeInUp}
                                >
                                    <ServiceCard service={service} />
                                </motion.div>
                            )
                        }
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export default index;