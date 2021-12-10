import React from "react";
import { Link } from "react-router-dom";

import styles from "./waiting.module.css";
import sharedStyles from "../../shared/shared-styles.module.css";

import Partition from "../../shared/components/partition/Partition";
import Part from "../../shared/components/part/Part";

import { colors } from "../../constants/colors";

const Waiting = () => {
	return (
		<main className={sharedStyles.main}>
			<Partition customStyle={{ width: "80%", margin: "0 auto" }}>
				<Part customStyle={{ flex: 1 }}>
					<section style={{ margin: "0 auto" }}>
						<h1 className={sharedStyles.title}>
							You're at <br />
							postion
						</h1>
						<h1
							className={sharedStyles.big_title}
							style={{ color: colors.main }}
						>
							#30
						</h1>
					</section>
				</Part>
				<Part
					customStyle={{
						flex: 1,
						borderLeft: "solid 0.5px #aaa",
					}}
				>
					<section style={{ margin: "0 auto" }}>
						<h1 className={sharedStyles.title}>
							Gain full access with <br />a referal code
						</h1>
						<div>
							<input
								className={styles.input}
								type="text"
								placeholder="Enter referal code"
							/>
						</div>
						<Link to="/refer">
							<button
								className={styles.btn}
								style={{ background: colors.main }}
							>
								Gain access
							</button>
						</Link>
					</section>
				</Part>
			</Partition>
		</main>
	);
};

export default Waiting;
