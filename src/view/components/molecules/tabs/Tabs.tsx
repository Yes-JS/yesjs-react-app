import React, { ReactElement } from 'react';

import styles from './Tabs.module.scss';

type TabsProps = {
	activeTabIndex?: number;
	showIndicator?: boolean;
	tabs: ReactElement[];
};

const Tabs: React.FC<TabsProps> = ({
	activeTabIndex = 0,
	showIndicator = false,
	tabs,
}) => {
	const tabsCountVariable = {
		'--tabsCount': tabs.length,
		'--activeTabIndex': activeTabIndex,
	} as React.CSSProperties;

	return (
		<div className={styles.tabsWrapper}>
			<div className={styles.tabsGrid}>{tabs.map((tab) => tab)}</div>
			{showIndicator && (
				<span className={styles.tabsIndicator} style={tabsCountVariable} />
			)}
		</div>
	);
};

export default Tabs;
