import React, { useEffect, useState } from "react";

import styles from "./referal.module.css";
import sharedStyles from "../../shared/shared-styles.module.css";

import Partition from "../../shared/components/partition/Partition";
import Part from "../../shared/components/part/Part";

import copy_icon from "../../assets/icons/copy_icon.jpg";

import { colors } from "../../constants/colors";

const Referal = () => {
	const [fade, setFade] = useState(false);
	const [copied, setCopied] = useState(false);

	const data = ["James Orengo", "Mercy Waiguru"];

	const handleCopy = () => {
		var range = document.createRange();

		// Selects text on the "ref" node
		range.selectNode(document.getElementById("ref"));
		window.getSelection().removeAllRanges();
		window.getSelection().addRange(range);

		// Adds it to clipboard
		document.execCommand("copy");
		window.getSelection().removeAllRanges();

		setCopied(true);
	};

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
											<span style={{ fontFamily: "Poppins Medium" }}>
												{val}
											</span>{" "}
											claimed this referal
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
							#<span id="ref">getin123</span>
							<button onClick={handleCopy}>
								<img src={copy_icon} alt="Copy referal code" />
							</button>
						</div>

						{copied && (
							<div className={sharedStyles.pop_card}>
								Successfully copied code
							</div>
						)}
					</section>
				</Part>
			</Partition>
		</main>
	);
};

export default Referal;
