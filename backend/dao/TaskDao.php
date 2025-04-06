<?php
// TaskDao.php
require_once 'BaseDao.php';

class TaskDao extends BaseDao {
    protected $table = "tasks";

    // Create a new task
    public function createTask($title, $description, $user_id = null, $category_id = null, $status = null) {
        $data = [
            'title'       => $title,
            'description' => $description,
            'user_id'     => $user_id,
            'category_id' => $category_id,
            'status'      => $status
        ];
        return $this->insert($this->table, $data);
    }

    // Get all tasks ordered by creation date descending
    public function getTasks() {
        return $this->select($this->table, "created_at DESC");
    }
    
    // Get a single task by its ID
    public function getTaskById($id) {
        $query = "SELECT * FROM {$this->table} WHERE id = :id";
        $stmt = $this->executeQuery($query, ['id' => $id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // Update a task (update title and description; add more fields as needed)
    public function updateTask($id, $title, $description) {
        $query = "UPDATE {$this->table} SET title = :title, description = :description WHERE id = :id";
        $params = [
            'title' => $title,
            'description' => $description,
            'id' => $id
        ];
        return $this->executeQuery($query, $params);
    }

    // Delete a task by id
    public function deleteTask($id) {
        $query = "DELETE FROM {$this->table} WHERE id = :id";
        $params = ['id' => $id];
        return $this->executeQuery($query, $params);
    }
}
?>
