import { motion } from 'framer-motion';
import Head from 'next/head';
import { fadeInUp, routeFade } from '../animations';
import Bar from '../components/Bar';
import { languages, tools } from '../data';

const resume = () => {
    return (
        <>
            <Head>
                <title>Resume Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <motion.div
                className="px-6 py-2"
                variants={routeFade}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {/* education & exp */}

                <div className="grid gap-6 md:grid-cols-2">
                    <motion.div variants={fadeInUp} initial="initial" animate="animate">
                        <h5 className="my-3 text-2xl font-bold">Knowleage</h5>
                        <div>
                            <p className="my-2">Over 3 years of experience in Typescript, Javascript</p>
                            <p className="my-2">Familiar with Angular 2+, Reactjs, Nextjs, Vuejs, Javascript.</p>
                            <p className="my-2">Build source code structure Angular, Reactjs, Nextjs, Vuejs.</p>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeInUp} initial="initial" animate="animate">
                        <h5 className="my-3 text-2xl font-bold">Personal Profile</h5>
                        <div>
                            <p className="my-2">Keen learner.</p>
                            <p className="my-2">Great passion for technology.</p>
                            <p className="my-2">Dynamic and responsible person.</p>
                            <p className="my-2">Ability to work both independently and as a member of a team.</p>
                            <p className="my-2">Sharp, fervent person about learning new technology.</p>
                        </div>
                    </motion.div>
                </div>

                {/* languages & tools */}

                <div className="grid gap-6 md:grid-cols-2">
                    <div>
                        <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
                        <div className="my-2">
                            {
                                languages &&
                                languages.map(language => <Bar data={language} key={language.name} />)
                            }
                        </div>
                    </div>
                    <div>
                        <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
                        <div className="my-2">
                            {
                                tools &&
                                tools.map(tool => <Bar data={tool} key={tool.name} />)
                            }
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default resume
