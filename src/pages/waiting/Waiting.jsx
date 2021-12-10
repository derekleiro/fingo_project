import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./waiting.module.css";
import sharedStyles from "../../shared/shared-styles.module.css";

import Partition from "../../shared/components/partition/Partition";
import Part from "../../shared/components/part/Part";

import { colors } from "../../constants/colors";

const Waiting = () => {
	const navigate = useNavigate();

	const [text, setText] = useState("");
	const [errors, setErrors] = useState("");
	const [fade, setFade] = useState(false);

	const handleInput = (e) => {
		setText(e.target.value);
		setErrors("");
	};

	const validateInput = () => {
		const REFERAL = "getin123";

		if (text === REFERAL) {
			navigate("/refer");
		} else {
			setErrors("Invalid invite");
		}
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
								onChange={handleInput}
								className={styles.input}
								type="text"
								placeholder="Enter referal code"
							/>
						</div>
						<button
							className={styles.btn}
							style={{ background: colors.main }}
							onClick={validateInput}
						>
							Gain access
						</button>
						{errors && (
							<div className={sharedStyles.pop_card} style={{ color: "red" }}>
								{errors}
							</div>
						)}
					</section>
				</Part>
			</Partition>
		</main>
	);
};

export default Waiting;
