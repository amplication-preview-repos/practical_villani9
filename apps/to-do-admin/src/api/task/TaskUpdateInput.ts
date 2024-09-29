import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  isComplete?: boolean | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
