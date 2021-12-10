import React, { useEffect, useState } from "react";

import styles from "./referal.module.css";
import sharedStyles from "../../shared/shared-styles.module.css";

import Partition from "../../shared/components/partition/Partition";
import Part from "../../shared/components/part/Part";

import copy_icon from "../../assets/icons/copy_icon.jpg";

import { colors } from "../../constants/colors";

const Referal = () => {
	const [fade, setFade] = useState(false);

	const data = ["James Orengo", "Mercy Waiguru"];

	useEffect(() => {
		let unmounted = false;

		setTimeout(() => {
			if (!unmounted) {
				setFade(true);
			}
		}, 50);

		return () => {
			unmounted = true;
		};
	}, []);

	return (
		<main className={sharedStyles.main} style={{ opacity: fade ? 1 : 0 }}>
			<Partition customStyle={{ width: "75%", margin: "0 auto" }}>
				<Part customStyle={{ flex: 1 }}>
					<section style={{ margin: "0 auto" }}>
						<h1 className={sharedStyles.title}>
							Referals <br />
							claimed
						</h1>
						<h1
							className={sharedStyles.big_title}
							style={{ color: colors.main }}
						>
							2/5
						</h1>
						<hr />

						<ul className={styles.users}>
							{data &&
								data.map((val, index) => {
									return (
										<li key={index}>
											<b>{val}</b> claimed this referal
										</li>
									);
								})}
						</ul>
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
							Copy & share <br /> referal code
						</h1>
						<div
							className={styles.code_box}
							style={{ background: colors.accent }}
						>
							#getin123
							<button>
								<img src={copy_icon} alt="copy code" />
							</button>
						</div>
					</section>
				</Part>
			</Partition>
		</main>
	);
};

export default Referal;
