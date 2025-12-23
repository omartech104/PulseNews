import { Controller, Get, Param, ValidationPipe } from '@nestjs/common';
import { NewsService } from './news.service';
import { RequestHeader } from './pipes/request-header';
import { HeadersDto } from './dto/header.dto';

@Controller('news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}
  @Get('all')
  getAllNews() {
    return this.newsService.getNews();
  }
  @Get('filter')
  getNewsFromCategory(
    // Remove @Param() here
    @RequestHeader(
      new ValidationPipe({
        validateCustomDecorators: true,
        transform: true,
      }),
    )
    headers: HeadersDto,
  ) {
    // Use the mapped property from your DTO
    return this.newsService.getNews(headers.category, headers.lang);
  }
}
