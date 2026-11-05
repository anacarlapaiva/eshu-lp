import { Container, SectionEyebrow } from "@/components";
import { revealOnScroll } from "@/animations";
import { lessonGroups } from "@/features/curriculum/data/lessons";
import { curriculumParts } from "@/features/curriculum/data/parts";
import { SectionShell, SectionTitle } from "@/features/shared/sectionStyles";

import {
  Board,
  Body,
  Card,
  Giant,
  Grid,
  Intro,
  Label,
  Lead,
  Lesson,
  LessonBody,
  LessonIndex,
  LessonTitle,
  PartHead,
  PartLabel,
  PartName,
  Title,
} from "./styles";

export function CurriculumSection() {
  return (
    <SectionShell>
      <Container>
        <Intro>
          <SectionEyebrow>Curriculum</SectionEyebrow>
          <SectionTitle {...revealOnScroll()}>What You'll Cover</SectionTitle>
          <Lead>
            Thirteen lessons, in two parts. You move through them at your own pace,
            from the history of Sacred Umbanda to the firmeza you build at home.
          </Lead>
        </Intro>
        <Grid>
          {curriculumParts.map((part, index) => (
            <Card key={part.label} {...revealOnScroll(index * 100)}>
              <Giant aria-hidden>{part.roman}</Giant>
              <Label>{part.label}</Label>
              <Title>{part.title}</Title>
              <Body>{part.body}</Body>
            </Card>
          ))}
        </Grid>
        <Board>
          {lessonGroups.map((group) => (
            <div key={group.label}>
              <PartHead>
                <PartLabel>{group.label}</PartLabel>
                <PartName>{group.title}</PartName>
              </PartHead>
              {group.lessons.map((lesson) => (
                <Lesson key={lesson.index}>
                  <LessonIndex>{lesson.index}</LessonIndex>
                  <div>
                    <LessonTitle>{lesson.title}</LessonTitle>
                    <LessonBody>{lesson.body}</LessonBody>
                  </div>
                </Lesson>
              ))}
            </div>
          ))}
        </Board>
      </Container>
    </SectionShell>
  );
}
