import Background from '../background/Background';
import styles from './Section.module.scss';

type Props = {
	id: string;
	background: string;
	subheading?: string;
	heading: string;
	style?: string;
	children: any;
};

const Section = (props: Props) => {
	return (
		<section
			id={props.id}
			className={`${styles.section} ${props.style ? props.style : ''}`}
		>
			<Background text={props.background} />
			<div className={styles.title}>
				<h2 className={styles.subheading}>
					{props.subheading}
				</h2>
				<h3 className={styles.heading}>{props.heading}</h3>
			</div>
			{props.children}
		</section>
	);
};

export default Section;
