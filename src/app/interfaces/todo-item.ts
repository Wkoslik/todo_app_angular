export interface TodoItem {
    title: string;
    description?: string;
    dueDate: string;
    tags?: string[];
    completed?: boolean;
}
