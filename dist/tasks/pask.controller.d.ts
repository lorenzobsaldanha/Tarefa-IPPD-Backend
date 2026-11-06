import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService, Task } from './tasks.service';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findAll(): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    create(dto: CreateTaskDto): Promise<Task>;
    update(id: number, dto: UpdateTaskDto): Promise<Task>;
    patch(id: number, dto: Partial<UpdateTaskDto>): Promise<Task>;
    remove(id: number): Promise<void>;
}
