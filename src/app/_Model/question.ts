export interface Question {
  Id?: number;
  Body?: string;
  Type?: string;
  ModelAnswer?: string;
  communityQuestionAnswers?: any[];
  solved: boolean;
  Course?: any;
  AnswerList?: any[];
  Answers?: any[];
  likes?: boolean;
}
