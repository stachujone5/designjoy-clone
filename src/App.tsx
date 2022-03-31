import { Header } from './components/header/Header'
import { Welcome } from './sections/welcome/Welcome'

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<Welcome />
			</main>
		</>
	)
}
