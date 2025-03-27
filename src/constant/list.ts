import { Create, Edit } from "../assets/imgs/img";

interface ListItem {
  id: number;
  title: string;
  link: string;
  icon: string;
}

export const List: ListItem[] = [
  {
    id: 1,
    title: "Create product",
    link: "create",
    icon: Create,
  },
  {
    id: 2,
    title: "Manage product",
    link: "",
    icon: Edit,
  },
];
