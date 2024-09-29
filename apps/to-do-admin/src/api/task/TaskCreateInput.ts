import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  isComplete?: boolean | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};