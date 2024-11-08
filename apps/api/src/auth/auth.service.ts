import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async registerUser(createUserDto: CreateUserDto) {
    const { email } = createUserDto;
    const user = await this.userService.findByEmail(email);

    if (user) throw new ConflictException('User already exists!');

    return this.userService.create(createUserDto);
  }
}
