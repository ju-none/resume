import { Window } from "@front/components/block/Window";
import { Container } from "reactstrap";
import "@styles/components/icon.scss";
import "@styles/pages/skills.scss";
import data from "../../../apps/resume/public/techno/index.json";
import { Text } from "@front/styles/components/titles";

type Skill = {
  title: string;
  image: string;
  category: string;
};

type SkillsData = Record<string, Skill>;


export default function Skills() {
    const skillsByCategory = Object.values(data as SkillsData).reduce<
    Record<string, Skill[]>
    >((acc, skill) => {
    if (!acc[skill.category]) {
        acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
    }, {});

    return (
        <section id="skills">
            <Container fluid className="skills">
                <Window>
                    <div>
                        {Object.entries(skillsByCategory).map(
                            ([category, skills]) => (
                            <section key={category}>
                                <h1>{category}</h1>
                                <ul>
                                    {skills.map((skill) => (
                                        <li className="icon-block">
                                            <div className="icon">
                                                <img src={`/techno/${skill.image}`} alt={skill.title}/>
                                            </div>
                                            <Text>{skill.title}</Text>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            )
                        )}
                    </div>
                </Window>
            </Container>
        </section>
    )
}