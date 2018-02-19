package com.renhai.notes.web;

import com.renhai.notes.entity.Note;
import com.renhai.notes.service.NoteService;
import com.renhai.notes.web.dto.NoteRequestDto;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by hai on 2/11/18.
 */
@Controller
@Slf4j
public class NotesController {

	@Autowired
	private NoteService noteService;

	@GetMapping("/")
	public String index() throws Exception {
		String id = noteService.generateId();
		log.info("New notes [{}] is created.", id);
		return "redirect:/" + id;
	}

	@GetMapping("/{id}")
	public String index(@PathVariable String id) throws Exception {
		if (!StringUtils.isAlphanumeric(id)) {
			return "redirect:/error";
		}
		Note note = noteService.getNote(id);
		if (note == null) {
			noteService.createNote(id, null);
		}
		return "index";
	}


	@GetMapping(value = "/api/notes/{id}")
	@ResponseBody
	public ResponseEntity notes(@PathVariable String id) throws Exception {
		Note note = noteService.getNote(id);
		return ResponseEntity.ok(note);
	}

	@PostMapping(value = "/api/notes/{id}")
	@ResponseBody
	public ResponseEntity notes(@PathVariable String id, @RequestBody NoteRequestDto notes) throws Exception {
		Note note = noteService.updateNotes(id, notes.getNotes());
		log.info("Note [{}] is updated.", id);
		return ResponseEntity.ok(note);
	}

	@GetMapping("/{id}/download")
	public void download(@PathVariable String id, HttpServletResponse response)
		throws Exception {
		Note note = noteService.getNote(id);
		response.setContentType("text/plain;charset=UTF-8");
		response.setCharacterEncoding("utf-8");
		response.setHeader("Content-Disposition","attachment;filename=" + id + ".txt");
		ServletOutputStream out = response.getOutputStream();
		out.write(note.getNotes().getBytes("utf-8"));
		out.flush();
		out.close();
	}
}
