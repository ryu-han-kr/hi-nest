import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { create } from 'domain';
import { Movie } from './entities/Movies.entitiy';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) {}

    @Get()
    getAll() :Movie[] {
        return this.moviesService.getAll();
    }

    @Get(':id')
    getOne(@Param('id') movieId: string): Movie {
        return this.moviesService.getOne(movieId);
    }
    
    @Post() 
    create(@Body() movieData) {
        return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId:string) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch('/:id')
    patch(@Param('id') movieId:string, @Body() updateData) {
        return {
            updateMovie: movieId,
            ...updateData,
        }
    }
}