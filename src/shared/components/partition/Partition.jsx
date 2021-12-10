import styles from "./partition.module.css";

const Partition = ({ children, customStyle }) => {
	return (
		<section className={styles.partition} style={customStyle}>
			{children}
		</section>
	);
};

export default Partition;
