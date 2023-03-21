package com.kg.completion.service;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/process")
public class Process {
    public Process() {

    }

    @RequestMapping(value = "", produces = "application/json;charset=UTF-8")
    public List<String> process() {
        File file = new File("/Users/yangqimin/Downloads/456.Json");   //待读文件路径
        List<String> ids = new ArrayList<>();   //获取的txt文件内容（按行存储）
        try {
            //读取文件内容
            BufferedReader bufferedReader = new BufferedReader(new FileReader(file));
            ids = bufferedReader.lines().collect(Collectors.toList());
        } catch (IOException e) {
            e.printStackTrace();
        }
        return ids;
    }
}
