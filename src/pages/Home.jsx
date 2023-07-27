import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Fresheners, HeroImg } from '../assets'
import CardCategory from '../components/card/CardCategory'
import CardItem from '../components/card/CardItem'
import { FreshFlower, DriedFlower, Candel, LivePlant } from '../assets'
import About from '../components/home/about'
import WhyChooseUs from '../components/home/WhyChooseUs/WhyChooseUs'
import Contact from '../components/home/Contact/Contact'
const Home = () => {
	return (
		<div className="">
			<Navbar />
			<section className="wrapper">
				<div className="w-full xl:w-1/2 xl:border-r border-black xl:border-b-[0px] border-b">
					<div className="md:px-20 px-5 pt-10 md:pt-20 pb-10 md:pb-5 flex flex-col">
						<div className="border-b border-black pb-10 justify-start">
							<p className='relative w-3/4 mb-4'>
								<h1 className='md:text-6xl text-4xl tracking-wide font-semibold !leading-[1.2]'>Jack
									<br />
									Phat Nguyen</h1>
							</p>
							<p className='md:text-base text-sm tracking-wide'>
								Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
								<p>
									<i>
										Spread Joy with Our Online Flower Delivery Service
									</i>
								</p>
							</p>
						</div>
						<div className="pt-[41px] justify-end">
							<div className="grid grid-cols-2 w-full h-full">
								<div className="w-full xl:h-64 2xl:h-96 filter grayscale-[70%] saturate-50 flex-[1_0_0] self-stretch items-start pr-2 md:pr-6">
									<img src={HeroImg} alt="" className='w-full h-full object-cover aspect-square' />
								</div>
								<div className="flex items-end text-sm h-full border-l border-black pl-2 md:pl-6 flex-[1_0_0]">
									<p>Experience the joy of giving with our modern floral studio. Order online and send fresh flowers, plants and gifts today.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full xl:w-1/2">
					<div className="grid grid-cols-2">
						<div className="border-b border-black">
							<CardCategory text="Fresh Flower" />
						</div>
						<div className="border-black border-b border-l">
							<CardItem src={FreshFlower} />
						</div>
						<div className="">
							<CardItem src={DriedFlower} alt="" />
						</div>
						<div className="border-l border-black">
							<CardCategory text="Dried Flower" />
						</div>
					</div>
				</div>
			</section>
			<section className="wrapper">
				<div className="hidden xl:block w-1/2 border-black border-r"></div>
				<div className="w-full xl:w-1/2">
					<div className="grid grid-cols-2">
						<div className="">
							<CardCategory text="Live Plant" />
						</div>
						<div className="border-black border-l">
							<CardItem src={LivePlant} />
						</div>
						<div className="border-black border-y">
							<CardItem src={Candel} />
						</div>
						<div className="border-black border-y border-l">
							<CardCategory text="Aroma Candels" />
						</div>
						<div className="">
							<CardCategory text="Fresheners" />
						</div>
						<div className="border-black border-l">
							<CardItem src={Fresheners} />
						</div>
					</div>
				</div>
			</section>
			<About />
			<WhyChooseUs />
			<Contact />
			<div className="w-full border-b border-black text-center py-16">
				<h1 className='md:text-5xl text-3xl tracking-wide font-semibold !leading-[1.2]'>Our Service</h1>
			</div>
		</div>
	)
}

export default Home