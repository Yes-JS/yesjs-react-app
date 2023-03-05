import React, { ErrorInfo, ReactElement } from 'react';

interface Props {
	children: ReactElement;
	errorScreen: ReactElement;
	onRecovery?: () => void;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.log('crash error: ', error);
		console.log('crash error-info: ', errorInfo);
	}

	render() {
		const { children, errorScreen, onRecovery } = this.props;

		return this.state.hasError
			? React.cloneElement(errorScreen, {
					click: (route: string) => {
						if (!!onRecovery) {
							onRecovery();
							this.setState({ hasError: false });
						} else {
							window.location.href = route;
						}
					},
			  })
			: children;
	}
}

export default ErrorBoundary;
