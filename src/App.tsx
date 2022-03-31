import { Header } from './components/header/Header'
import { ProjectsSlider } from './sections/projects_slider/ProjectsSlider'
import { Welcome } from './sections/welcome/Welcome'

export const App = () => {
	return (
		<>
			<Header />
			<main>
				<Welcome />
				<ProjectsSlider />
			</main>
		</>
	)
}
