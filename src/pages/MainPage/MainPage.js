import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import CarouselItem from '../../components/CarouselItem/CarouselItem';
import dijamant from '../../assets/images/shape3.png';
import pozdrav from '../../assets/images/marina-pozdrav.jpg';
import jelka from '../../assets/images/jelka.jpg';
import snesko from '../../assets/images/snesko.jpg';
import pas from '../../assets/images/pas.jpg';
import zurka1 from '../../assets/images/zurka1.jpg';
import zurka2 from '../../assets/images/zurka2.jpg';
import snimak1 from '../../assets/images/snimak1.mp4';
import leptir from '../../assets/images/butterfly.jpg';
import TraitColumn from '../../components/TraitColumn/TraitColumn';
import MainText from '../../components/MainText/MainText';
import Card from '../../components/Card/Card';

const MainPage = () => {
	return (
		<main>
			<section className='section0'>
				<Carousel
					swipeable={true}
					useKeyboardArrows={true}
					showThumbs={false}
					showIndicators={false}
					autoFocus={true}
					emulateTouch={true}
					preventMovementUntilSwipeScrollTolerance={true}
					swipeScrollTolerance={5}
				>
					<CarouselItem
						firstLine='Ćao svima, ja sam Marina'
						secondLine='Studiram hemiju'
						thirdLine='Marina Garabiljević'
						backgroundImage={pozdrav}
					/>

					<CarouselItem
						firstLine='Obožavam praznike'
						secondLine='Zato što mogu da pokažem svoje znanje kao električar-dizajner'
						backgroundImage={jelka}
					/>

					<CarouselItem
						firstLine='Dobra sam i ćutim,'
						secondLine='Ali, nažalost, to niko ne ceni'
						backgroundImage={leptir}
					/>
				</Carousel>
			</section>

			<section className='section1'>
				<MainText
					topTitle='Sa vama još od 1999-te'
					title='Moje istaknute osobine'
					subtitle='Ako niste imali to zadovoljstvo da me upoznate, ovo će vam biti najbolja prilika.'
				/>

				<div className='row-shapes'>
					<TraitColumn
						textTitle='Druželjubiva'
						textDescription='Svi me opisuju kao veoma druželjubivu osobu'
						image={dijamant}
					/>

					<TraitColumn
						textTitle='Zračim pozitivnom energijom'
						textDescription='Svako ko me upozna, može da posvedoči da sam ja Sunce u ljudkom obliku'
						image={dijamant}
					/>

					<TraitColumn
						textTitle='Čista pred svim bogovima'
						textDescription='Ne moram ni da objašnjavam šta ovo znači'
						image={dijamant}
					/>
				</div>
			</section>

			<section className='section2'>
				<MainText
					title='Ova sekcija je posvećena uspomenama na moje drugare'
					subtitle='Možete videti šta moji prijatelji kažu o meni'
				/>

				<div className='cards-container'>
					<Card title='Uvek najglasnija' hoverText='Išla bih na zvezde, ali ne treba mi pažnja' image={zurka2} additionalStyle={{marginTop:'45%'}} />

					<Card title='Moj dečko i ja' hoverText='Napravila sam ga po meri' image={snesko} additionalStyle={{marginTop:'45%'}} />

					<Card title='Brinem se o životinjama' hoverText='Kako sam brižna prema svim živim bićima' image={pas} additionalStyle={{marginTop:'45%'}} />
				
					<Card title='Uvek vesela i nasmejana' hoverText='Išla bih na zvezde, ali ne treba mi pažnja' image={snimak1} video={true}/>

					<Card title='Iznad svih u svakom pogledu' hoverText='Šta nije jasno??' image={zurka1} additionalStyle={{marginTop:'20%'}} />
                </div>
			</section>
		</main>
	);
};

export default MainPage;
