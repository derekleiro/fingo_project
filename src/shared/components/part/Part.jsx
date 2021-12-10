import styles from "./part.module.css";

const Part = ({ children, customStyle }) => {
	return (
		<div className={styles.part} style={{ ...customStyle }}>
			{children}
		</div>
	);
};

export default Part;
