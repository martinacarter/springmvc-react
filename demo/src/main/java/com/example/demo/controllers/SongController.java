package com.example.demo.controllers;
import com.example.demo.model.Song;
import com.example.demo.repositories.SongRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api")
public class SongController {

    private final SongRepository songRepository;

    public SongController(SongRepository songRepository) {
        this.songRepository = songRepository;
    }

    @GetMapping("/songs")
    public List<Song> getAllSongs(){
      List<Song> result = songRepository.findAll();
        return result;
    }
}
